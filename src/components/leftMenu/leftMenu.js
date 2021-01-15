import classes from './leftMenu.module.css'
function LeftMenu () {
    let items = ['Заметка 1', 'Заметка 2', "Заметка на заметке 2"]
    let deletedItems = [1,2,3]
    return (
        <div className={classes.left}>
            <div className={classes.header}>
             <span>Logo</span>
             <button className={classes.btn}>Add Button</button>
            </div>
            <div className={classes.notes}>
            {items.map(item => {
                return(
                    <div key={item} className={classes.note}>{item}</div>
                )
            })}
            </div>
            <div style={{borderTop: '1px solid #fff'}} className={classes.notes + '' + '123'}>
            {deletedItems.map(item => {
                return(
                    <div key={item} className={classes.note}>{item}</div>
                )
            })}
            </div>
        </div>
    )
}

export default LeftMenu