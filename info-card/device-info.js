document.addEventListener('DOMContentLoaded', function () {
    const ipAddressElement = document.getElementById('ip-address');
    const locationElement = document.getElementById('location');
    const ispElement = document.getElementById('isp');
    const fingerprintElement = document.getElementById('browser-fingerprint');

    // 获取用户的 IP 地址和位置
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            ipAddressElement.textContent = data.ip;
            locationElement.textContent = `${data.city}, ${data.state_prov}, ${data.country_name}`;
            ispElement.textContent = data.isp;

            // 获取浏览器指纹
            const fingerprint = {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                vendor: navigator.vendor,
                appName: navigator.appName,
                product: navigator.product,
                appVersion: navigator.appVersion,
                cookieEnabled: navigator.cookieEnabled,
                deviceMemory: navigator.deviceMemory,
                hardwareConcurrency: navigator.hardwareConcurrency,
                language: navigator.language,
                screenResolution: `${screen.width} x ${screen.height}`,
                pixelRatio: window.devicePixelRatio,
                actualResolution: `${window.screen.availWidth} x ${window.screen.availHeight}`,
                colorDepth: screen.colorDepth,
                localTime: new Date().toLocaleString(),
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                maxTouchPoints: navigator.maxTouchPoints,
                plugins: Array.from(navigator.plugins).map(plugin => plugin.name).join(', '),
                webglVendor: (function() {
                    const canvas = document.createElement('canvas');
                    const gl = canvas.getContext('webgl');
                    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                    return debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'unknown';
                })(),
                webglRenderer: (function() {
                    const canvas = document.createElement('canvas');
                    const gl = canvas.getContext('webgl');
                    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                    return debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'unknown';
                })(),
                canvasFingerprint: (function() {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    ctx.textBaseline = 'top';
                    ctx.font = '14px Arial';
                    ctx.fillText('test', 2, 2);
                    return canvas.toDataURL();
                })(),
                fontsFingerprint: (function() {
                    // 仅示例，实际需要用字体检测库或方法
                    return 'example-fonts';
                })(),
                audioFingerprint: (function() {
                    // 仅示例，实际需要用音频分析库或方法
                    return 'example-audio';
                })()
            };

            fingerprintElement.innerHTML = `
                <strong>userAgent:</strong> ${fingerprint.userAgent}<br>
                <strong>platform:</strong> ${fingerprint.platform}<br>
                <strong>vendor:</strong> ${fingerprint.vendor}<br>
                <strong>appName:</strong> ${fingerprint.appName}<br>
                <strong>product:</strong> ${fingerprint.product}<br>
                <strong>appVersion:</strong> ${fingerprint.appVersion}<br>
                <strong>cookieEnabled:</strong> ${fingerprint.cookieEnabled}<br>
                <strong>deviceMemory:</strong> ${fingerprint.deviceMemory}<br>
                <strong>hardwareConcurrency:</strong> ${fingerprint.hardwareConcurrency}<br>
                <strong>language:</strong> ${fingerprint.language}<br>
                <strong>screenResolution:</strong> ${fingerprint.screenResolution}<br>
                <strong>pixelRatio:</strong> ${fingerprint.pixelRatio}<br>
                <strong>actualResolution:</strong> ${fingerprint.actualResolution}<br>
                <strong>colorDepth:</strong> ${fingerprint.colorDepth}<br>
                <strong>localTime:</strong> ${fingerprint.localTime}<br>
                <strong>timeZone:</strong> ${fingerprint.timeZone}<br>
                <strong>maxTouchPoints:</strong> ${fingerprint.maxTouchPoints}<br>
                <strong>plugins:</strong> ${fingerprint.plugins}<br>
                <strong>webglVendor:</strong> ${fingerprint.webglVendor}<br>
                <strong>webglRenderer:</strong> ${fingerprint.webglRenderer}<br>
                <strong>canvasFingerprint:</strong> <img src="${fingerprint.canvasFingerprint}" alt="Canvas Fingerprint"><br>
                <strong>fontsFingerprint:</strong> ${fingerprint.fontsFingerprint}<br>
                <strong>audioFingerprint:</strong> ${fingerprint.audioFingerprint}
            `;
        })
        .catch(error => {
            console.error('Error fetching IP and location data:', error);
            ipAddressElement.textContent = '无法获取';
            locationElement.textContent = '无法获取';
            ispElement.textContent = '无法获取';
        });
});
