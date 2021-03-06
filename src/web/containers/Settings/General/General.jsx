import classNames from 'classnames';
import get from 'lodash/get';
import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import i18n from '../../../lib/i18n';
import styles from './index.styl';

class General extends Component {
    static propTypes = {
        state: PropTypes.object,
        stateChanged: PropTypes.bool,
        actions: PropTypes.object
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        const { state, stateChanged, actions } = this.props;
        const lang = get(state, 'lang', 'en');

        return (
            <form>
                <div className={styles.formFields}>
                    <div className={styles.formGroup}>
                        <label>{i18n._('Language')}</label>
                        <select
                            className={classNames(
                                'form-control',
                                styles.formControl,
                                styles.short
                            )}
                            value={lang}
                            onChange={(event) => {
                                const target = event.target;
                                actions.changeLanguage(target.value);
                            }}
                        >
                            <option value="cs">Čeština</option>
                            <option value="de">Deutsch</option>
                            <option value="en">English (US)</option>
                            <option value="es">Español</option>
                            <option value="fr">Français (France)</option>
                            <option value="it">Italiano</option>
                            <option value="ja">日本語</option>
                            <option value="pt-br">Português (Brasil)</option>
                            <option value="ru">Русский</option>
                            <option value="zh-cn">简体中文</option>
                            <option value="zh-tw">繁體中文</option>
                        </select>
                    </div>
                </div>
                <div className={styles.formActions}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="pull-left">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={actions.handleRestoreDefaults}
                                >
                                    {i18n._('Restore Defaults')}
                                </button>
                            </div>
                            <button
                                type="button"
                                className="btn btn-default"
                                onClick={actions.handleCancel}
                            >
                                {i18n._('Cancel')}
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                disabled={!stateChanged}
                                onClick={actions.handleSave}
                            >
                                <i className="fa fa-save" />
                                <span className="space" />
                                {i18n._('Save Changes')}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default General;
