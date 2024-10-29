export function ReusableEditableSection({ children, sectionClassName }) {

    return (
        <div className='editable-section' >
            <section className={sectionClassName}>
                {children}
            </section>
            
        </div>
    )


}