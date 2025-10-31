import React from 'react'

const Loader = ({ size = 40, color = '#1976d2', label = 'Loading...' }) => {
    const stroke = Math.max(2, Math.round(size / 8))
    const viewBoxSize = 50
    const r = 20
    const cx = viewBoxSize / 2
    const cy = viewBoxSize / 2

    return (
        <div
            role="status"
            aria-live="polite"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                userSelect: 'none'
            }}
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
                aria-hidden="true"
                style={{ display: 'block' }}
            >
                {/* track */}
                <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke="#e6e6e6"
                    strokeWidth={stroke}
                />
                {/* rotating arc */}
                <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke={color}
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={Math.round(Math.PI * r)}
                    strokeDashoffset="0"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`0 ${cx} ${cy}`}
                        to={`360 ${cx} ${cy}`}
                        dur="0.9s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>

            {/* <span style={{ fontSize: Math.max(12, size * 0.35), color: '#333' }}>{label}</span> */}
        </div>
    )
}

export default Loader
