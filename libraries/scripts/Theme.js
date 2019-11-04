/**
 * @file Theme クラスのファイルです。
 * 
 * @author MOTOMATSU Yoji
 * @version 1.4.0
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
     * デフォルトの変化時間のプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get transitionDuration() {
        return HTMLUtilities.getRootPropertyValue('--transition-duration');
    }
    static set transitionDuration(value) {
        HTMLUtilities.setRootPropertyValue('--transition-duration', value);
    }

    /**
     * デフォルトの変化が開始されるまでの時間のプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get transitionDelay() {
        return HTMLUtilities.getRootPropertyValue('--transition-delay');
    }
    static set transitionDelay(value) {
        HTMLUtilities.setRootPropertyValue('--transition-delay', value);
    }
}
