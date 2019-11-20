/**
 * @file HTMLUtilities クラスのファイルです。
 * 
 * @author MOTOMATSU Yoji
 * @version 1.6.1
 */

/**
 * HTMLUtilities のクラスです。
 */
export class HTMLUtilities {
    /**
     * iOS のピンチイン・ピンチアウトによる拡大縮小を抑止します。
     */
    static disablePinchToZoom() {
        document.documentElement.addEventListener('touchstart', event => {
            if (event.touches.length >= 2) {
                event.preventDefault();
            }
        }, { passive: false });
    }

    /**
     * CSS Variables を取得します。
     * @param {string} propertyName - プロパティ名
     * @returns {string} - プロパティの値
     */
    static getRootPropertyValue(propertyName) {
        const styles = getComputedStyle(document.documentElement);
        return String(styles.getPropertyValue(propertyName)).replace(/"/g, '').trim();
    }

    /**
     * CSS Variables を設定します。
     * @param {string} propertyName - プロパティ名
     * @param {string} value - プロパティの値
     */
    static setRootPropertyValue(propertyName, value) {
        document.documentElement.style.setProperty(propertyName, value);
    }

    /**
     * 要素オブジェクトのプロパティを取得します。
     * @param {object} element      - 要素オブジェクト
     * @param {string} propertyName - プロパティ名
     * @returns {string} - プロパティの値
     */
    static getPropertyValue(element, propertyName) {
        return window.getComputedStyle(element, '').getPropertyValue(propertyName);
    }

    /**
     * 要素オブジェクトのプロパティを整数値で取得します。
     * @param {object} element      - 要素オブジェクト
     * @param {string} propertyName - プロパティ名
     * @returns {number} - プロパティの値
     */
    static getPropertyValueAsInteger(element, propertyName) {
        let propertyValue = HTMLUtilities.getPropertyValue(element, propertyName);
        return parseInt(propertyValue.replace('px', ''), 10);
    }

    /**
     * スクロールバーの幅の整数値を取得します。このメソッドは、スクロールバーの幅を
     * 取得するための仮の要素を body 要素に挿入します。スクロールバーの幅を
     * 取得した後は、仮の要素は削除されます。
     * @returns {number} - スクロールバーの幅
     */
    static getScrollbarWidthAsInteger() {
        const tempElement = document.createElement('div');
        tempElement.setAttribute('style',
            `overflow: scroll; visibility: hidden; position: fixed;
             left: 0; top: 0; height: 100%; width: 100%;`);
        document.body.appendChild(tempElement);

        const scrollbarWidth = tempElement.offsetWidth - tempElement.clientWidth;

        document.body.removeChild(tempElement);

        return scrollbarWidth;
    }
}
