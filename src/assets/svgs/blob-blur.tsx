import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1016}
        height={272}
        fill="none"
        {...props}
    >
        <g filter="url(#blobBlur)">
            <path
                fill="#000"
                fillOpacity={0.08}
                fillRule="evenodd"
                d="M851.005 423.032c-77.928 4.415-146.961-19.472-214.869-57.906-93.644-52.997-236.925-89.309-235.286-196.86C402.489 60.741 555.277 42.285 642.027-21.366 720.97-79.29 777.248-198.517 873.028-178.187 969.13-157.789 976.191-27.912 1021.53 59.186c48.9 93.935 164.38 181.427 119.43 277.338-45.01 96.045-184.011 80.505-289.955 86.508Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <filter
                id="blobBlur"
                width={1550.31}
                height={1404.05}
                x={0.836}
                y={-580.493}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur
                    result="effect1_foregroundBlur_486_457"
                    stdDeviation={200}
                />
            </filter>
        </defs>
    </svg>
)
export default SvgComponent
