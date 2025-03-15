"use client";

import {
  FaUpload,
  FaDownload,
  FaTrash,
  FaFileAlt,
  FaCheckSquare,
  FaSquare,
  FaSearch,
} from "react-icons/fa";
import { PageTitle } from "@/components/PageTitle";
import { useState, useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const ALLOWED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export const FilesView = () => {
  const [files, setFiles] = useState<
    { file: File; previewUrl: string; name: string }[]
  >([]);
  const [error, setError] = useState<string>("");
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>(""); // User input state
  const [debouncedQuery, setDebouncedQuery] = useState<string>(""); // Debounced search term

  // **Debounce effect to delay search execution**
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 450);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const handleFileUpload = (filesToUpload: FileList | null) => {
    if (!filesToUpload) return;

    const uploadedFiles = Array.from(filesToUpload);
    const validFiles = uploadedFiles.filter((file) => {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        setError(
          `"${file.name}" fayl növü uyğun deyil. Yalnız PNG, JPG, PDF, DOCX, XLS, XLSX yükləyə bilərsiniz.`
        );
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        setError(`"${file.name}" faylı çox böyükdür. Maksimum ölçü 10MB.`);
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setError("");
      setFiles((prevFiles) => [
        ...prevFiles,
        ...validFiles.map((file) => ({
          file,
          previewUrl: URL.createObjectURL(file),
          name: file.name,
        })),
      ]);
    }
  };

  const handleInputFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleFileUpload(event.target.files);
  };

  const handleDownload = async (file: File, name: string) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBulkDownload = async () => {
    if (selectedFiles.size === 0) return;

    const zip = new JSZip();
    files.forEach(({ file, name }) => {
      if (selectedFiles.has(name)) {
        zip.file(name, file);
      }
    });

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "selected_files.zip");
    setSelectedFiles(new Set());
  };

  const handleDelete = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter(({ name }) => name !== fileName));
    setSelectedFiles((prevSelected) => {
      const updatedSelection = new Set(prevSelected);
      updatedSelection.delete(fileName);
      return updatedSelection;
    });
  };

  const handleBulkDelete = () => {
    setFiles((prevFiles) =>
      prevFiles.filter(({ name }) => !selectedFiles.has(name))
    );
    setSelectedFiles(new Set());
  };

  const toggleFileSelection = (fileName: string) => {
    setSelectedFiles((prevSelected) => {
      const updatedSelection = new Set(prevSelected);
      if (updatedSelection.has(fileName)) {
        updatedSelection.delete(fileName);
      } else {
        updatedSelection.add(fileName);
      }
      return updatedSelection;
    });
  };

  // **Filtered files using debounced query**
  const filteredFiles = files.filter(({ name }) =>
    name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <section className="filesSection flex flex-col gap-4 w-full">
      <PageTitle title="Fayllar" />

      {/* File Upload Section */}
      <div className="border border-dashed rounded-lg p-6 text-center">
        <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center gap-2 justify-center w-max mx-auto transition duration-200">
          <FaUpload />
          Fayl Yüklə
          <input
            type="file"
            className="hidden"
            multiple
            accept=".png,.jpg,.jpeg,.pdf,.docx,.xls,.xlsx"
            onChange={handleInputFileChange}
          />
        </label>
        <p className="text-gray-500 text-sm mt-4">
          Maksimum ölçü: 10MB | Dəstəklənən formatlar: PNG, JPG, PDF, DOCX, XLS,
          XLSX
        </p>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <div
        className={`flex flex-row ${
          selectedFiles.size > 0 ? "justify-between" : "justify-end"
        } items-center gap-3`}
      >
        {/* Bulk Action Buttons */}
        {selectedFiles.size > 0 && (
          <div className="flex gap-3 willSimplyFadeIn">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              onClick={handleBulkDownload}
            >
              Seçilmişləri Yüklə (ZIP)
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              onClick={handleBulkDelete}
            >
              Seçilmişləri Sil
            </button>
          </div>
        )}

        {/* Search Bar with Debounce */}
        <div className="willSimplyFadeIn flex items-center self-end border border-gray-300 rounded-md px-3 py-2 w-1/4">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Fayl axtarın..."
            className="w-full focus:outline-none disabled:cursor-not-allowed"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={filteredFiles.length === 0}
            title={
              filteredFiles.length > 0
                ? "Faylları axtarın"
                : "Axtarmağa heç bir fayl yoxdur"
            }
          />
        </div>
      </div>

      {/* File List */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h2 className="text-lg font-semibold">Yüklənmiş fayllar siyahısı</h2>
        {filteredFiles.length === 0 ? (
          <p className="text-gray-500 text-sm">Fayl tapılmadı.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {filteredFiles.map(({ file, previewUrl, name }, index) => (
              <li
                key={index}
                className="flex items-center gap-4 p-3 border-b border-gray-200"
              >
                <button onClick={() => toggleFileSelection(name)}>
                  {selectedFiles.has(name) ? (
                    <FaCheckSquare className="text-blue-600 text-lg" />
                  ) : (
                    <FaSquare className="text-gray-400 text-lg" />
                  )}
                </button>

                {file.type.startsWith("image/") ? (
                  <img
                    src={previewUrl}
                    alt={name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                ) : (
                  <FaFileAlt className="text-gray-500 text-3xl" />
                )}

                <span className="text-sm font-medium">{name}</span>

                <span className="text-xs text-gray-500">
                  {(file.size / 1024).toFixed(2)} KB
                </span>

                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => handleDownload(file, name)}
                >
                  <FaDownload />
                </button>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => handleDelete(name)}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
