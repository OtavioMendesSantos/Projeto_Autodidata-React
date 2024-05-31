import React, { useEffect } from 'react'
import styles from './Slide.module.css'

const Slide = ({ slides }) => {
    const [ativo, setAtivo] = React.useState(0)
    const [position, setPosition] = React.useState(0)
    const contentRef = React.useRef()

    useEffect(() => {
        const { width } = contentRef.current.getBoundingClientRect()
        setPosition(-(ativo * width))
    }, [ativo])

    const slidePrev = () => {
        if (ativo > 0) setAtivo(ativo - 1)
    }

    const slideNext = () => {
        if (ativo < slides.length - 1) setAtivo(ativo + 1)
    }

    return (
        <section className={styles.container}>
            <div
                ref={contentRef}
                className={styles.content}
                style={{ transform: `translateX(${position}px)` }}
            >
                {slides.map(slide => (
                    <div key={slide.id} className={styles.item}>
                        {slide.text}
                    </div>
                ))}
            </div>
            <nav className={styles.nav}>
                <button
                    onClick={slidePrev}
                    disabled={ativo === 0}
                >
                    Anterior
                </button>
                <button
                    onClick={slideNext}
                    disabled={(ativo === slides.length - 1)}
                >
                    Próximo
                </button>
            </nav>
        </section>
    )
}

export default Slide