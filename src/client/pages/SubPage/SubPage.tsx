/* Library */
import React, { PropsWithChildren } from 'react';
import clx from 'classnames';
import { Typography, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

/* Application files */
import Separator from 'client/components/Separator';
import ProgramSummary from 'client/components/ProgramSummary';
import Partners from 'client/components/Partners';

type Props = PropsWithChildren<{
    title?: string;
    className?: string;
}>;

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 60,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 20
        }
    },
    content: {
        width: 547,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    title: {
        fontWeight: 900,
        paddingBottom: 55,
        textTransform: 'uppercase',
        width: '100%'
    },
    sidebar: {
        width: 226,
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            alignItems: 'center',
            marginTop: 20
        }
    }
}));

export function SubPage (props: Props) {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    return (
        <div className={clx(classes.container, { [props.className]: !!props.className })}>
            <section className={classes.content}>
                {props.title && (<Typography variant="h2" className={classes.title}>{props.title}</Typography>)}
                {props.children}
            </section>
            <aside className={classes.sidebar}>
                {mobile && <Separator />}
                <ProgramSummary />
                <Partners {...(mobile ? {} : { vertical: true })} />
            </aside>
        </div>
    );
}

export default SubPage;
