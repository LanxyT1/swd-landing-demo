import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={42}
        fill="none"
        {...props}
    >
        <path
            fill="url(#bookIcon)"
            stroke="#000"
            strokeWidth={1.2}
            d="M9.9 26.819v.97l.868-.434c.362-.18.734-.309 1.118-.385a6.3 6.3 0 0 1 1.239-.12H14.6V6.4h-1.475a3.13 3.13 0 0 0-2.284.941A3.13 3.13 0 0 0 9.9 9.625v17.194Zm7-.569v.6h15.2V6.4H16.9v19.85Zm16.532 3.395-.006.003-.007.003c-.505.253-.911.62-1.205 1.097a3.052 3.052 0 0 0-.439 1.627c0 .594.141 1.146.434 1.64.296.5.713.872 1.242 1.099.328.14.56.322.722.534a.996.996 0 0 1 .227.62v.438c0 .345-.11.618-.336.854a1.06 1.06 0 0 1-.814.34H13.125c-1.533 0-2.824-.535-3.907-1.618C8.135 35.199 7.6 33.908 7.6 32.375V9.625c0-1.533.535-2.824 1.618-3.907C10.301 4.635 11.592 4.1 13.125 4.1H31.5c.802 0 1.474.279 2.048.852.573.574.852 1.246.852 2.048v21.919c0 .05-.013.115-.109.21-.112.112-.374.288-.859.516ZM29.444 35.6h.91l-.359-.836a7.213 7.213 0 0 1-.384-1.152 5.264 5.264 0 0 1-.136-1.237c0-.429.04-.842.12-1.239.076-.384.204-.756.385-1.118l.435-.868h-17.29c-.909 0-1.695.313-2.312.948-.607.625-.913 1.396-.913 2.277 0 .903.301 1.687.92 2.306l.424-.425-.425.425c.619.618 1.403.919 2.306.919h16.319Z"
        />
        <defs>
            <linearGradient
                id="bookIcon"
                x1={21}
                x2={21}
                y1={3.5}
                y2={38.5}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#EFC283" />
                <stop offset={1} stopColor="#9F670D" />
            </linearGradient>
        </defs>
    </svg>
)
export default SvgComponent
