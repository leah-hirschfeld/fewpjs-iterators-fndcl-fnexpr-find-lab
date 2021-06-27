function superbowlWin(arrayOfObjects) {
    const win = arrayOfObjects.find(record => record.result === 'W')
    if (win !== undefined) {
        return win.year}
}
