import classes from './leftMenu.module.css'
function LeftMenu () {
    return (
        <div className={classes.left}>
            <div className={classes.header}>
             <button className={classes.btn}>Add Button</button>
            </div>
            <div className={classes.notes}>2</div>
            <div className={classes.notes}>3</div>
        </div>
    )
}

export default LeftMenu