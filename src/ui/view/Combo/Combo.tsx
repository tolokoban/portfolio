import Style from "./Combo.module.css"

export interface ComboProps {
    className?: string
    options: { [key: string]: string }
    value: string
    onChange(value: string): void
}

export function ViewCombo({ className, options, value, onChange }: ComboProps) {
    const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(evt.target.value)
    }
    return (
        <select
            className={join(className, Style.Combo)}
            value={value}
            onChange={handleChange}
        >
            {Object.keys(options).map((key) => (
                <option key={key} value={key}>
                    {options[key]}
                </option>
            ))}
        </select>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
