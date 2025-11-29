import { forwardRef } from 'react';

const InputField = forwardRef(({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    error,
    disabled = false,
    icon: Icon,
    iconPosition = 'left',
    className = '',
    helpText,
    size = 'md',
    fullWidth = true,
    autoFocus = false,
    ...props
}, ref) => {
    const sizeClasses = {
        sm: 'p-2 text-sm',
        md: 'p-3 text-base',
        lg: 'p-4 text-lg'
    };

    return (
        <div className={`space-y-1 ${fullWidth ? 'w-full' : 'w-auto'} ${className}`}>
            {label && (
                <label 
                    htmlFor={name}
                    className={`font-mono text-xs text-zinc-400 uppercase tracking-widest block ${
                        error ? 'text-red-500' : ''
                    }`}
                >
                    {label}
                </label>
            )}
            
            <div className="relative">
                {Icon && iconPosition === 'left' && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon className="h-5 w-5 text-zinc-500" />
                    </div>
                )}
                
                <input
                    ref={ref}
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    className={`${sizeClasses[size]} ${
                        Icon && iconPosition === 'left' ? 'pl-10' : 'pl-3'
                    } pr-3 w-full bg-zinc-900 border ${
                        error 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-zinc-800 focus:border-lime-400'
                    } font-mono text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                        disabled ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${name}-error` : helpText ? `${name}-help` : undefined}
                    {...props}
                />
                
                {Icon && iconPosition === 'right' && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <Icon className="h-5 w-5 text-zinc-500" />
                    </div>
                )}
            </div>
            
            {error && (
                <p id={`${name}-error`} className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            )}
            
            {helpText && !error && (
                <p id={`${name}-help`} className="mt-1 text-xs text-zinc-500">
                    {helpText}
                </p>
            )}
        </div>
    );
});

InputField.displayName = 'InputField';

export default InputField;
