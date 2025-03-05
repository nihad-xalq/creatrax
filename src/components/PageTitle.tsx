interface IPageTitleProps {
    title: string;
}

export const PageTitle = ({ title }: IPageTitleProps) => {
    return <h1 className="text-4xl text-gray-900 text-center sm:text-left font-semibold mb-5">{title}</h1>
};
