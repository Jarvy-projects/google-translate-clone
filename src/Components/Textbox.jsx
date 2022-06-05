import SelectDropdown from "./SelectDropdown";

function TextBox({ selectedLanguage, style, setShowModal, setTextToTranslate, textToTranslate, translatedText, setTranslatedText }) {

    const handleClick = () => {
        setTextToTranslate('')
        setTranslatedText('')
    }

    return (
        <div className={style} >
            <SelectDropdown
                style={style}
                selectedLanguage={selectedLanguage}
                setShowModal={setShowModal}
            />
            <textarea
                placeholder={style == 'input' ? 'Enter Text' : 'Translation'}
                disabled={style == 'output'}
                onChange={(e) => setTextToTranslate(e.target.value)}
                value={style == 'input' ? textToTranslate : translatedText}
            />
            {style == 'input' && (
                <div className='delete' onClick={handleClick}>✕</div>
            )}
        </div >
    )
}

export default TextBox;