interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="flex items-center justify-between  px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
    >
      {props.children || "Enviar"}
    </button>
  );
}
