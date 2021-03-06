import React, { PropTypes } from 'react';
import Anchor from '../../../components/Anchor';
import i18n from '../../../lib/i18n';
import styles from './index.styl';

const AboutContainer = ({ title }) => {
    const wiki = 'https://github.com/cheton/cnc/wiki';

    return (
        <div className={styles.aboutContainer}>
            <img src="logo.png" alt="" className={styles.productLogo} />
            <div className={styles.productDescription}>
                <div className={styles.aboutProductTitle}>{title}</div>
                <div className={styles.aboutProductDescription}>
                    A web-based interface for CNC milling controller running Grbl or TinyG2
                </div>
                <Anchor
                    className={styles.learnmore}
                    href={wiki}
                    target="_blank"
                >
                    {i18n._('Learn more')}
                    <i className="fa fa-arrow-circle-right" style={{ marginLeft: 5 }} />
                </Anchor>
            </div>
        </div>
    );
};

AboutContainer.propTypes = {
    title: PropTypes.string
};

export default AboutContainer;

