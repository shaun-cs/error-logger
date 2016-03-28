/**
 * Created by shaun on 26/03/16.
 */

let setLogScroll = ( type ) => {
    let selector = type ? `.logs.${ type }` : '.logs',
        logs     = document.querySelectorAll( selector );

    for ( let i = 0; i < logs.length; i++ ) {
        let log = logs.item( i );
        log.scrollTop = log.scrollHeight;
    }
};

Template.logs.onCreated( () => {
    Template.instance().subscribe( 'logs', '123456789' );
});

Template.logs.onRendered( () => {
    setLogScroll();
    Logs.find().observe( { added() { setLogScroll(); } } );
});

Template.logs.helpers({
    logs( type ) {
        let query = type === 'live' ? {} : { type: type },
            logs  = Logs.find( query );

        if ( logs ) {
            return logs;
        }
    }
});
