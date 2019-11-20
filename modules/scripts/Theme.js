/**
 * @file Theme クラスのファイルです。
 * 
 * @author MOTOMATSU Yoji
 * @version 1.6.1
 */

import { HTMLUtilities } from './HTMLUtilities.js';

/**
 * Theme クラスです。
 */
export class Theme {
    /**
     * メインカラーのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get mainColor() {
        return HTMLUtilities.getRootPropertyValue('--main-color');
    }
    static set mainColor(value) {
        HTMLUtilities.setRootPropertyValue('--main-color', value);
    }

    /**
     * ベースカラーのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get baseColor() {
        return HTMLUtilities.getRootPropertyValue('--base-color');
    }
    static set baseColor(value) {
        HTMLUtilities.setRootPropertyValue('--base-color', value);
    }

    /**
     * アクセントカラーのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get accentColor() {
        return HTMLUtilities.getRootPropertyValue('--accent-color');
    }
    static set accentColor(value) {
        HTMLUtilities.setRootPropertyValue('--accent-color', value);
    }

    /**
     * 透過色のメインカラーのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get transparentMainColor() {
        return HTMLUtilities.getRootPropertyValue('--transparent-main-color');
    }
    static set transparentMainColor(value) {
        HTMLUtilities.setRootPropertyValue('--transparent-main-color', value);
    }

    /**
     * 透過色のベースカラーのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get transparentBaseColor() {
        return HTMLUtilities.getRootPropertyValue('--transparent-base-color');
    }
    static set transparentBaseColor(value) {
        HTMLUtilities.setRootPropertyValue('--transparent-base-color', value);
    }

    /**
     * 透過色のアクセントカラーのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get transparentAccentColor() {
        return HTMLUtilities.getRootPropertyValue('--transparent-accent-color');
    }
    static set transparentAccentColor(value) {
        HTMLUtilities.setRootPropertyValue('--transparent-accent-color', value);
    }

    /**
     * 暗いボーダーカラーのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get darkBorderColor() {
        return HTMLUtilities.getRootPropertyValue('--dark-border-color');
    }
    static set darkBorderColor(value) {
        HTMLUtilities.setRootPropertyValue('--dark-border-color', value);
    }

    /**
     * 明るいボーダーカラーのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get lightBorderColor() {
        return HTMLUtilities.getRootPropertyValue('--light-border-color');
    }
    static set lightBorderColor(value) {
        HTMLUtilities.setRootPropertyValue('--light-border-color', value);
    }

    /**
     * デフォルトのフォントカラーのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get defaultFontColor() {
        return HTMLUtilities.getRootPropertyValue('--default-font-color');
    }
    static set defaultFontColor(value) {
        HTMLUtilities.setRootPropertyValue('--default-font-color', value);
    }

    /**
     * デフォルトの背景のカラーのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get defaultBackgroundColor() {
        return HTMLUtilities.getRootPropertyValue('--default-background-color');
    }
    static set defaultBackgroundColor(value) {
        HTMLUtilities.setRootPropertyValue('--default-background-color', value);
    }

    /**
     * デフォルトの影のプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get defaultBoxShadow() {
        return HTMLUtilities.getRootPropertyValue('--default-box-shadow');
    }
    static set defaultBoxShadow(value) {
        HTMLUtilities.setRootPropertyValue('--default-box-shadow', value);
    }

    /**
     * デフォルトの変化時間のプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get defaultTransitionDuration() {
        return HTMLUtilities.getRootPropertyValue('--default-transition-duration');
    }
    static set defaultTransitionDuration(value) {
        HTMLUtilities.setRootPropertyValue('--default-transition-duration', value);
    }

    /**
     * デフォルトの変化が開始されるまでの時間のプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get defaultTransitionDelay() {
        return HTMLUtilities.getRootPropertyValue('--default-transition-delay');
    }
    static set defaultTransitionDelay(value) {
        HTMLUtilities.setRootPropertyValue('--default-transition-delay', value);
    }

    /**
     * デフォルトのフォントサイズのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get defaultFontSize() {
        return HTMLUtilities.getRootPropertyValue('--default-font-size');
    }
    static set defaultFontSize(value) {
        HTMLUtilities.setRootPropertyValue('--default-font-size', value);
    }

    /**
     * デフォルトの見出しタグのフォントサイズのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get defaultHeadlineFontSize() {
        return HTMLUtilities.getRootPropertyValue('--default-headline-font-size');
    }
    static set defaultHeadlineFontSize(value) {
        HTMLUtilities.setRootPropertyValue('--default-headline-font-size', value);
    }

    /**
     * デフォルトの水平スペースのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get defaultHorizontalSpacing() {
        return HTMLUtilities.getRootPropertyValue('--default-horizontal-spacing');
    }
    static set defaultHorizontalSpacing(value) {
        HTMLUtilities.setRootPropertyValue('--default-horizontal-spacing', value);
    }

    /**
     * デフォルトの垂直スペースのプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get defaultVerticalSpacing() {
        return HTMLUtilities.getRootPropertyValue('--default-vertical-spacing');
    }
    static set defaultVerticalSpacing(value) {
        HTMLUtilities.setRootPropertyValue('--default-vertical-spacing', value);
    }

    /**
     * デフォルトのボーダー半径のプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get defaultBorderRadious() {
        return HTMLUtilities.getRootPropertyValue('--default-border-radious');
    }
    static set defaultBorderRadious(value) {
        HTMLUtilities.setRootPropertyValue('--default-border-radious', value);
    }

    /**
     * デフォルトの PC スクリーンの最小幅です。
     * @property {string} value - css プロパティの値
     */
    static get defaultPCScreenMinWidth() {
        return HTMLUtilities.getRootPropertyValue('--default-pc-screen-min-width');
    }
    static set defaultPCScreenMinWidth(value) {
        HTMLUtilities.setRootPropertyValue('--default-pc-screen-min-width', value);
    }
}
