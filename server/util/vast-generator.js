const config = require('config');

const { baseUrl } = config.get('comboWrapper');

exports.generateEmptyVastXML = () => '<VAST version="2.0"></VAST>';

exports.generateVastXML = ({ id, vast_url, position, hide_ui }) => {
    const urlEncoded = encodeURIComponent(vast_url);

    return `
    <VAST version="2.0">
        <Ad id="ComboGuard">
            <InLine>
                <AdSystem>2.0</AdSystem>
                <Impression/>
                <Creatives>
                    <Creative>
                    <Linear>
                        <Duration>00:00:19</Duration>
                        <MediaFiles>
                            <MediaFile type="application/x-shockwave-flash" apiFramework="VPAID" height="168" width="298" delivery="progressive">
                            <![CDATA[
                            ${baseUrl}/ComboWrapper.swf?vast=${urlEncoded}&position=${position}&hideUI=${hide_ui}&videoId=${id}
                            ]]>
                            </MediaFile>
                            <MediaFile type="application/javascript" apiFramework="VPAID" height="168" width="298" delivery="progressive">
                            <![CDATA[
                            ${baseUrl}/ComboWrapper.js?vast=${urlEncoded}&position=${position}&hideUI=${hide_ui}&videoId=${id}
                            ]]>
                            </MediaFile>
                        </MediaFiles>
                    </Linear>
                    </Creative>
                </Creatives>
            </InLine>
        </Ad>
    </VAST>
    `;
}