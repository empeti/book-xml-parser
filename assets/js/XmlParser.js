/**
 * Created by empet on 2017. 02. 05..
 */
XmlParser = {
    getParsedXMLString: function(xml){
        var xml     = (new XMLSerializer()).serializeToString(xml);
        var xmlDoc  = $.parseXML(xml), $xml = $(xmlDoc);
        return $xml;
    }
}