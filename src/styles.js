import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection:'row',
        justify:'center',
        alignItems: 'center',
    },

    heading: {
        color: 'rgba(255,154,1)',
        marginLeft: '2rem',
    },

    [theme.breakpoints.down('sm')] : {
        mainContainer: {
            flexDirection: 'column-reverse'
        }
    }
}))