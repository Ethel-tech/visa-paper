const CustomButton = ({
	bgColor,
	borderColor,
	borderSolid,
	padding,
	textColor,
	btnText,
	onClick,
	icon,
}) => {
	return (
		<div className="my-3">
			<button
				onClick={onClick}
				className="w-full w-auto w-fit h-auto text-center inline-block rounded-full"
				style={{
					backgroundColor: bgColor,
					color: textColor,
					borderStyle: borderSolid,
					borderWidth: "1px",
					borderColor: borderColor,
					padding: padding,
				}}
			>
				{btnText} <span>{icon}</span>
			</button>
		</div>
	);
};

export default CustomButton;
