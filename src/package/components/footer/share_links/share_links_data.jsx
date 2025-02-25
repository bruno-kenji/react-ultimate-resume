import React from 'react';
import { FormattedMessage } from 'react-intl';

import { CopyWrapper } from '../../commons/copy_wrapper/copy_wrapper';

import { ReactComponent as GithubIcon } from '../../../assets/icons/brands/github.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/icons/brands/linkedin.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/share.svg';

export const SHARE_LINKS_DATA = Object.freeze({
    github: {
        icon: GithubIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.seeOnTooltip"
                defaultMessage="See on {platform}"
                values={{ platform: 'Github' }}
            />
        ),
        getLink: () => 'https://www.github.com/bruno-kenji/'
    },
    linkedIn: {
        icon: LinkedInIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.seeOnTooltip"
                defaultMessage="See on {platform}"
                values={{ platform: 'LinkedIn' }}
            />
        ),
        getLink: () => 'https://www.linkedin.com/in/brunoken/'
    },
    copyShareUrl: {
        icon: (props) => (
            <CopyWrapper value={(typeof window === 'undefined' ? {} : window).location?.href}>
                <ShareIcon {...props} />
            </CopyWrapper>
        ),
        tooltipTranslation: <FormattedMessage id="Footer.shareLinks.copyUrl" defaultMessage="Copy profile's URL" />
    }
});
