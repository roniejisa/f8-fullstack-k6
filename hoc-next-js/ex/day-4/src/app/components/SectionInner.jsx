const SectionInner = ({ id, children }) => {
    return (
        <section id={id} className="py-5">
            {children}
        </section>
    );
};

export default SectionInner;
