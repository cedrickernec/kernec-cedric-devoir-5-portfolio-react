export default function Container({children, className=""}) {
    return (
        <div className={`container px-4 px-md-2 px-lg-5 my-5 ${className}`}>
            {children}
        </div>
    );
}