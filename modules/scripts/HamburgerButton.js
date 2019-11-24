/**
 * @file HamburgerButton クラスのファイルです。
 * 
 * @author MOTOMATSU Yoji
 * @version 1.6.1
 */

import { HTMLUtilities } from './HTMLUtilities.js';
import { Theme } from './Theme.js';

/**
 * HamburgerButton クラスです。
 */
export class HamburgerButton {
    /**
     * ボタンの z-index のプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get zIndex() {
        return HTMLUtilities.getRootPropertyValue('--hamburger-button-z-index');
    }
    static set zIndex(value) {
        HTMLUtilities.setRootPropertyValue('--hamburger-button-z-index', value);
    }

    /**
     * ボタンの影の z-index のプロパティです。
     * @property {string} value - css プロパティの値
     */
    static get zIndexShadow() {
        return HTMLUtilities.getRootPropertyValue('--hamburger-button-z-index-shadow');
    }
    static set zIndexShadow(value) {
        HTMLUtilities.setRootPropertyValue('--hamburger-button-z-index-shadow', value);
    }

    /**
     * コンストラクタです。
     * @param {string} id - HTML の div 要素オブジェクトの id
     * @example
     * css の設定例です。height と width は同じ値を設定します。
     * div#hamburger-button {
     *   position: fixed;
     *   left: 1.0rem;
     *   top:  1.0rem;
     *   height: 3.6rem;
     *   width:  3.6rem;
     * }
     */
    constructor(id) {
        // Hamburger Button の div タグを取得します。
        this._element = document.getElementById(id);
        this._element.style.cursor = 'pointer';
        this._element.style.zIndex = HamburgerButton.zIndex;

        // Hamburger Button は幅と高さが 72px の時に角部の丸みが 8px の比率とします。
        // const width = HTMLUtilities.getPropertyValueAsInteger(this._element, 'width');
        // const radius = 8 * width / 72;

        this._pushed = false;
        this._pushing = false;
        // this._boxShadow = `${radius / 2}px ${radius / 2}px ${radius / 2}px 0px ${Theme.darkBorderColor}`;

        // Hamburger Button のバーは、上下の隙間 = 16、左右の隙間（半径部を除く）= 10、
        // 太さ = 4、半径 = 2、バーの長さ（半径部を除く）= 52 で設定しています。
        const svgRectId = 'svg-rect';
        const svgTopBarId = 'svg-top-bar';
        const svgCenterBarId = 'svg-center-bar';
        const svgBottomBarId = 'svg-bottom-bar';
        const svgSource = `<svg viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg">
                <rect id="${svgRectId}" x="0" y="0" width="72" height="72" />
                <path id="${svgTopBarId}"
                    d="M 62 16 A 2 2 0 1 1 62 20 L 10 20 A 2 2 0 1 1 10 16 Z"
                    stroke-width="0" fill="white" />
                <path id="${svgCenterBarId}"
                    d="M 62 34 A 2 2 0 1 1 62 38 L 10 38 A 2 2 0 1 1 10 34 Z"
                    stroke-width="0" fill="white" />
                <path id="${svgBottomBarId}"
                    d="M 62 52 A 2 2 0 1 1 62 56 L 10 56 A 2 2 0 1 1 10 52 Z"
                    stroke-width="0" fill="white" />
            </svg>`;
        const domParser = new DOMParser();
        const svgDocument = domParser.parseFromString(svgSource, 'image/svg+xml');
        this._svgElement = svgDocument.childNodes[0];
        this._svgElement.style.position = 'absolute';
        this._svgElement.style.left = '0';
        this._svgElement.style.top = '0';
        this._svgElement.style.height = '100%';
        this._svgElement.style.width = '100%';
        this._svgElement.style.border = 'none';
        this._svgElement.style.borderRadius = Theme.defaultBorderRadious;
        this._svgElement.style.zIndex = HamburgerButton.zIndex;
        this._svgRectId = this._svgElement.getElementById(svgRectId);
        this._svgTopBarId = this._svgElement.getElementById(svgTopBarId);
        this._svgCenterBarId = this._svgElement.getElementById(svgCenterBarId);
        this._svgBottomBarId = this._svgElement.getElementById(svgBottomBarId);

        this._shadowElement = document.createElement('div');
        this._shadowElement.style.position = 'absolute';
        this._shadowElement.style.left = '0';
        this._shadowElement.style.top = '0';
        this._shadowElement.style.height = '100%';
        this._shadowElement.style.width = '100%';
        this._shadowElement.style.border = 'none';
        this._shadowElement.style.borderRadius = Theme.defaultBorderRadious;
        this._shadowElement.style.zIndex = HamburgerButton.zIndexShadow;

        this._element.appendChild(this._svgElement);
        this._element.appendChild(this._shadowElement);

        this._setNormalColor('0s');

        this._element.addEventListener('touchstart', event => {
            // console.log('Hamburger Button touchstart.');
            this._setPushing(true);
        });
        this._element.addEventListener('mousedown', event => {
            // console.log('Hamburger Button mousedown.');
            if (!this._pushing) {
                this._setPushing(true);
            }
        });
        this._element.addEventListener('touchmove', event => {
            // console.log('Hamburger Button touchmove.');
            let rect = this._svgElement.getBoundingClientRect();
            let x = event.touches[0].clientX;
            let y = event.touches[0].clientY;
            if ((x < rect.left) || (rect.right < x) || (y < rect.top) || (rect.bottom < y)) {
                this._setPushing(false);
            }
        });
        this._element.addEventListener('mouseleave', event => {
            // console.log('Hamburger Button mouseleave.');
            this._setPushing(false);
        });
        this._element.addEventListener('mouseup', event => {
            // console.log('Hamburger Button mouseup.');
            if (this._pushing) {
                this._setPushed(!this._pushed);
            }
        });
        this._element.addEventListener('click', event => {
            // console.log('Hamburger Button click.');
        });
    }

    /**
     * HTML の div 要素オブジェクトです。
     * @property {Object} element - div 要素オブジェクト
     * @readonly
     */
    get element() { return this._element; }

    /**
     * ボタンの状態を変更します。
     * @property {boolean} pushed - 押されている場合は true、そうでない場合は false
     */
    get pushed() { return this._pushed; }
    set pushed(value) {
        this._setPushing(true);
        this._setPushed(value);
    }

    /**
     * ボタンを表示します。
     */
    show() {
        this._element.style.transition =
            `opacity ${Theme.defaultTransitionDuration}, visibility 0s`;
        this._element.style.opacity = '1.0';
        this._element.style.visibility = 'visible';
    }

    /**
     * ボタンを非表示にします。
     */
    hide() {
        this._element.style.transition = `opacity ${Theme.defaultTransitionDelay},
            visibility 0s ${Theme.defaultTransitionDelay}`;
        this._element.style.opacity = '0.0';
        this._element.style.visibility = 'hidden';
    }

    _setPushing(value) {
        this._pushing = value;
        if (this._pushing) {
            if (this._pushed) {
                this._setNormalColor('0s');
            } else {
                this._setPushedColor('0s');
            }
        } else {
            if (this._pushed) {
                this._setPushedColor(Theme.defaultTransitionDuration);
            } else {
                this._setNormalColor(Theme.defaultTransitionDuration);
            }
        }
    }

    _setPushed(value) {
        this._pushing = false;

        this._pushed = value;
        if (this._pushed) {
            // 上下のバーを 43.8131° 回転して高さを 36 にします。
            // さらに X 方向に 7 移動します。
            this._svgTopBarId.style.transition =
                `transform-origin 0s, transform ${Theme.defaultTransitionDuration}`;
            this._svgTopBarId.style.transformOrigin = '10px 18px';
            this._svgTopBarId.style.transform = 'translateX(7px) rotate(43.8131deg)';

            this._svgCenterBarId.style.transition = `opacity ${Theme.defaultTransitionDuration}`;
            this._svgCenterBarId.style.opacity = '0.0';

            this._svgBottomBarId.style.transition =
                `transform-origin 0s, transform ${Theme.defaultTransitionDuration}`;
            this._svgBottomBarId.style.transformOrigin = '10px 54px';
            this._svgBottomBarId.style.transform = 'translateX(7px) rotate(-43.8131deg)';
        } else {
            this._svgTopBarId.style.transition =
                `transform-origin 0s, transform ${Theme.defaultTransitionDuration}`;
            this._svgTopBarId.style.transformOrigin = '10px 18px';
            this._svgTopBarId.style.transform = 'rotate(0) translateX(0)';

            this._svgCenterBarId.style.transition = `opacity ${Theme.defaultTransitionDuration}`;
            this._svgCenterBarId.style.opacity = '1.0';

            this._svgBottomBarId.style.transition =
                `transform-origin 0s, transform ${Theme.defaultTransitionDuration}`;
            this._svgBottomBarId.style.transformOrigin = '10px 54px';
            this._svgBottomBarId.style.transform = 'rotate(0) translateX(0)';
        }
    }

    _setNormalColor(duration) {
        this._shadowElement.style.transition = `box-shadow ${duration}`;
        this._shadowElement.style.boxShadow = Theme.defaultBoxShadow;
        this._svgRectId.style.transition = `fill ${duration}`;
        this._svgRectId.style.fill = Theme.mainColor;
    }

    _setPushedColor(duration) {
        this._shadowElement.style.transition = `box-shadow ${duration}`;
        this._shadowElement.style.boxShadow = `${Theme.defaultBoxShadow} inset`;
        this._svgRectId.style.transition = `fill ${duration}`;
        this._svgRectId.style.fill = Theme.accentColor;
    }
}
