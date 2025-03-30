type ButtonProps = {
  onClick: () => void;
  text: string;
};

function Button({ onClick, text }: ButtonProps) {
  return <input type="button" value={text} onClick={onClick} />;
}

export default Button;
