import "./customInput.scss";

const CustomInput = ({ onChange, name, label, form, options, value }) => {
	return (
		<div className="w-full h-auto flex flex-col ">
			<label>{label}</label>

			<select
				value={value}
				className="p-4 h-auto rounded-full border-solid border-black border"
				name={name}
				form={form}
				onChange={onChange}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default CustomInput;
