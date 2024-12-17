import { FormHTMLAttributes, PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface IFormProviderProps<T extends FieldValues> {
  onSubmit: SubmitHandler<T>;
  methods: UseFormReturn<T>;
  formProps?: FormHTMLAttributes<HTMLFormElement>;
  className?: string;
}

export const CFormProvider = <T extends FieldValues>({
  onSubmit,
  children,
  methods,
  formProps,
  className,
}: PropsWithChildren<IFormProviderProps<T>>) => (
  <FormProvider {...methods}>
    <form
      className={`${className} w-full mt-2`}
      {...formProps}
      onSubmit={(e) => {
        e.stopPropagation();
        methods.handleSubmit(onSubmit)(e);
      }}
    >
      {children}
    </form>
  </FormProvider>
);
