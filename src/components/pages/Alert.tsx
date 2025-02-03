import React from 'react'

interface AlertProps {
    variant?: 'default' | 'destructive'
    children: React.ReactNode
    className?: string
}

export function Alert({ variant = 'default', children, className = '' }: AlertProps) {
    return (
        <div
            role="alert"
            className={`rounded-lg border p-4 ${
                variant === 'destructive'
                    ? 'border-red-500/50 bg-red-50 text-red-700'
                    : 'border-gray-200 bg-white text-gray-900'
            } ${className}`}
        >
            {children}
        </div>
    )
}

export function AlertDescription({ children }: { children: React.ReactNode }) {
    return <div className="text-sm">{children}</div>
}
