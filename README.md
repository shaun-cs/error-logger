
## Setup for JS6:

meteor create --release 1.3-beta.16 .

## Meteor Packages
<table>
    <tr>
        <td><strong>meteor add momentjs:moment</strong></td>
        <td>parse, validate, manipulate, and display dates</td>
    </tr>
    <tr>
        <td><strong>meteor add http</strong></td>
        <td>make http calls to remote servers</td>
    </tr>
    <tr>
        <td><strong>meteor add meteorhacks:picker</strong></td>
        <td>server side router</td>
    </tr>
    <tr>
        <td><strong>meteor add aldeed:collection2</strong></td>
        <td>automatic schema validation</td>
    </tr>
    <tr>
        <td><strong>meteor add check</strong></td>
        <td>check and match params against patterns</td>
    </tr>
    <tr>
        <td><strong>meteor remove autopublish</strong></td>
        <td>Turn off autopublish to prevent all data from being sent to client</td>
    </tr>
    <tr>
        <td><strong>meteor add fortawesome:fontawesome</strong></td>
        <td>Font Awesome (official): 500+ scalable vector icons, customizable via CSS, Retina
            friendly</td>
    </tr>
    <tr>
        <td><strong>meteor add iron:router</strong></td>
        <td>routing specifically for Meteor</td>
    </tr>
    <tr>
        <td><strong>meteor add twbs:bootstrap</strong></td>
        <td>most popular front-end framework for developing responsive, mobile first projects on
            the web</td>
    </tr>
</table>



## NPM Packages
<table>
    <tr>
        <td><strong>npm i --save body-parser</strong></td>
        <td>POST request body parser</td>
    </tr>
</table>

## REST
curl -vv -X POST -H 'x-application-id:123456789' -H "Content-Type: application/json" -d '{"type":"success","date":"2016-02-24T08:16:15","title":"my title","message":"my message"}' http://localhost:3000/api/v1/logs/ingest

applicationId: String,
        type: Match.OneOf( 'danger', 'warning', 'info', 'success' ),
        date: String,
        title: String,
        message: String,
        payload: Match.Optional( Object )