interface IconButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      {...props}
      className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
    >
      {props.children || "Enviar"}
    </button>
  );
}
