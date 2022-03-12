
function ManualInput({ inputNumberRetriever, manualInputHandler, artId }){
    return(
        <>
            <input type="number" placeholder="Enter Num..." min="1" max="471600" defaultValue={artId} onChange={inputNumberRetriever} />
            <input type="submit" onClick={manualInputHandler}/>
        </>
    )
}

export default ManualInput