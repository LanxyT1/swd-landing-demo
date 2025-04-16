import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={42}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="url(#b)"
                stroke="#333"
                strokeWidth={1.2}
                d="m13.55 33.674 1.023-1.024h-1.448A5.532 5.532 0 0 1 7.6 27.125V10.5c0-1.408.399-2.474 1.069-3.3.678-.835 1.668-1.467 2.917-1.935C14.1 4.322 17.502 4.1 21 4.1c3.498 0 6.9.222 9.414 1.165 1.249.468 2.24 1.1 2.917 1.935.67.826 1.069 1.892 1.069 3.3v16.625a5.532 5.532 0 0 1-5.525 5.525h-1.44l1.014 1.022 1.995 2.013.009.008a.266.266 0 0 1-.195.457H28.35a.294.294 0 0 1-.188-.087l-3.238-3.237-.175-.176h-7.497l-.176.176-3.238 3.237-.01.011-.011.012a.222.222 0 0 1-.167.064h-1.908c-.258 0-.366-.303-.205-.463l2.012-2.013Zm5.7-15.574h.6V9.9H9.9v8.2h9.35Zm12.25 0h.6V9.9h-9.95v8.2h9.35ZM9.9 27.125a3.221 3.221 0 0 0 3.225 3.225 3.221 3.221 0 0 0 3.225-3.225 3.221 3.221 0 0 0-3.225-3.225A3.221 3.221 0 0 0 9.9 27.125Zm15.75 0a3.221 3.221 0 0 0 3.225 3.225 3.221 3.221 0 0 0 3.225-3.225 3.221 3.221 0 0 0-3.225-3.225 3.221 3.221 0 0 0-3.225 3.225Z"
            />
        </g>
        <defs>
            <linearGradient
                id="b"
                x1={21}
                x2={21}
                y1={3.5}
                y2={36.75}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#727272" />
                <stop offset={1} stopColor="#00D9FF" />
            </linearGradient>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h42v42H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
