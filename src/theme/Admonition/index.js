import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';
function NoteIcon() {
  return (
    <svg viewBox="0 0 14 16">
      <path
        fillRule="evenodd"
        d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
      />
    </svg>
  );
}
function TipIcon() {
  return (
    <svg viewBox="0 0 12 16">
      <path
        fillRule="evenodd"
        d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
      />
    </svg>
  );
}
function DangerIcon() {
  return (
    <svg viewBox="0 0 12 16">
      <path
        fillRule="evenodd"
        d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
      />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg viewBox="0 0 14 16">
      <path
        fillRule="evenodd"
        d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
      />
    </svg>
  );
}
function CautionIcon() {
  return (
    <svg viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
      />
    </svg>
  );
}
function PurpleIcon() {
  return (
    <svg height="512px" viewBox="0 0 512 512" width="512px">
      <path
        fillRule="evenodd"
        d="M449.441,393.818V178.852c0-31.555-27.967-57.236-62.365-57.236H369.99v-3.434c0-31.566-27.967-57.236-62.365-57.236  h-23.034H152.586h-27.661c-34.388,0-62.365,25.67-62.365,57.236v214.965c0,31.555,27.978,57.236,62.365,57.236h17.084v3.435  c0,31.565,27.978,57.235,62.366,57.235h27.661h132.005h11.867h11.167C421.474,451.053,449.441,425.384,449.441,393.818z   M364.041,432.318H232.036h-27.661c-23.177,0-41.956-17.237-41.956-38.5v-3.435v-18.736V178.852c0-21.263,18.779-38.5,41.956-38.5  h27.661h117.545h14.46h5.949h17.085c23.177,0,41.956,17.237,41.956,38.5v214.966c0,21.263-18.779,38.5-41.956,38.5h-11.167H364.041z  "/><path d="M197.397,214.935h162.334c4.484,0,8.115-3.632,8.115-8.116s-3.631-8.115-8.115-8.115H197.397  c-4.484,0-8.116,3.631-8.116,8.115S192.913,214.935,197.397,214.935z"/><path d="M223.046,261.967c0,4.484,3.642,8.115,8.126,8.115h152.119c4.484,0,8.126-3.631,8.126-8.115s-3.642-8.127-8.126-8.127  H231.172C226.688,253.84,223.046,257.482,223.046,261.967z"/><path d="M348.083,317.102c0-4.484-3.632-8.116-8.116-8.116h-142.57c-4.484,0-8.116,3.632-8.116,8.116s3.631,8.126,8.116,8.126  h142.57C344.451,325.228,348.083,321.587,348.083,317.102z"/><path d="M391.417,372.249c0-4.484-3.642-8.115-8.126-8.115H249.689c-4.484,0-8.116,3.631-8.116,8.115s3.631,8.116,8.116,8.116  h133.602C387.776,380.365,391.417,376.733,391.417,372.249z"/>
    </svg>
  );
}
function PaperIcon() {
  return (
    <svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px">
      <path d="M21.171,15.398l-5.912-9.854C14.483,4.251,13.296,3.511,12,3.511s-2.483,0.74-3.259,2.031l-5.912,9.856  c-0.786,1.309-0.872,2.705-0.235,3.83C3.23,20.354,4.472,21,6,21h12c1.528,0,2.77-0.646,3.406-1.771  C22.043,18.104,21.957,16.708,21.171,15.398z M12,8.449c0.854,0.002,1.549,0.698,1.551,1.55c0,0.853-0.695,1.549-1.55,1.551  c-0.854-0.002-1.55-0.698-1.552-1.55C10.449,9.145,11.145,8.449,12,8.449z M13.69,16.91c-0.032,0.037-0.795,0.918-2.068,0.918  c-0.051,0-0.103-0.001-0.154-0.004c-0.508-0.03-0.928-0.255-1.185-0.634c-0.315-0.465-0.358-1.113-0.121-1.825l0.406-1.221  c0.225-0.683,0.01-0.792-0.106-0.85c-0.031-0.016-0.08-0.025-0.14-0.025c-0.251,0-0.597,0.148-0.708,0.206  c-0.104,0.054-0.235,0.026-0.311-0.067C9.23,13.313,9.232,13.181,9.31,13.09c0.033-0.039,0.867-0.995,2.223-0.914  c0.505,0.029,0.925,0.253,1.182,0.631c0.316,0.465,0.36,1.114,0.124,1.828l-0.406,1.221c-0.227,0.682-0.01,0.792,0.106,0.85  c0.02,0.01,0.062,0.023,0.137,0.023c0.254,0,0.6-0.148,0.712-0.205c0.106-0.056,0.235-0.026,0.31,0.068  C13.77,16.687,13.768,16.819,13.69,16.91z"/>
    </svg>
  );
}
function PinkIcon() {
  return (
    <svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px">
      <g>
        <path d="M13.839,17.525c-0.006,0.002-0.559,0.186-1.039,0.186c-0.265,0-0.372-0.055-0.406-0.079c-0.168-0.117-0.48-0.336,0.054-1.4   l1-1.994c0.593-1.184,0.681-2.329,0.245-3.225c-0.356-0.733-1.039-1.236-1.92-1.416C11.456,9.532,11.134,9.5,10.815,9.5   c-1.849,0-3.094,1.08-3.146,1.126c-0.179,0.158-0.221,0.42-0.102,0.626c0.12,0.206,0.367,0.3,0.595,0.222   c0.005-0.002,0.559-0.187,1.039-0.187c0.263,0,0.369,0.055,0.402,0.078c0.169,0.118,0.482,0.34-0.051,1.402l-1,1.995   c-0.594,1.185-0.681,2.33-0.245,3.225c0.356,0.733,1.038,1.236,1.921,1.416c0.314,0.063,0.636,0.097,0.954,0.097   c1.85,0,3.096-1.08,3.148-1.126c0.179-0.157,0.221-0.42,0.102-0.626C14.312,17.543,14.063,17.451,13.839,17.525z"/>
        <circle cx="13" cy="6.001" r="2.5"/>
      </g>
    </svg>
  );
}
function ColorfulIcon() {
  return (
    <svg height="200px" viewBox="0 0 200 200" width="200px">
      <g>
        <path d="M106.582,63.015c-4.273,4.856-7.285,9.74-8.877,14.553c-0.502,1.523-0.854,3.021-1.063,4.488   c-2.215-0.544-4.521-0.837-6.898-0.837c-16.009,0-29.036,13.028-29.036,29.036c0,16.01,13.026,29.034,29.036,29.034   c16.009,0,29.034-13.024,29.034-29.034c0-2.375-0.291-4.686-0.835-6.9c6.094-0.852,12.553-4.224,19.045-9.933   c1.877,5.267,2.906,10.931,2.906,16.833c0,27.652-22.499,50.152-50.15,50.152c-27.654,0-50.152-22.5-50.152-50.152   c0-27.653,22.498-50.15,50.152-50.15C95.649,60.104,101.318,61.136,106.582,63.015z M162.652,57.992   c-3.902,7.567-8.006,14.359-12.231,20.235c5.071,9.567,7.946,20.466,7.946,32.028c0,37.843-30.779,68.626-68.623,68.626   c-37.84,0-68.626-30.783-68.626-68.626c0-37.841,30.786-68.627,68.626-68.627c11.563,0,22.465,2.879,32.035,7.951   c5.856-4.217,12.632-8.319,20.224-12.234c-14.728-10.588-32.775-16.833-52.259-16.833C40.259,20.512,0,60.773,0,110.255   c0,49.485,40.259,89.744,89.744,89.744c49.481,0,89.743-40.259,89.743-89.744C179.487,90.771,173.241,72.722,162.652,57.992z    M92.301,97.312c-0.827-0.167-1.682-0.254-2.557-0.254c-7.28,0-13.197,5.92-13.197,13.198c0,7.278,5.917,13.197,13.197,13.197   c7.278,0,13.198-5.919,13.198-13.197c0-0.875-0.09-1.729-0.25-2.556l-8.962,6.983c-1.044,0.816-2.354,1.269-3.688,1.269   c-1.598,0-3.106-0.625-4.238-1.756c-2.135-2.138-2.344-5.549-0.485-7.928L92.301,97.312z"/>
        <path d="M168.587,36.007c6.827,1.365,21.227,3.238,27.908-3.444c10.069-10.07-3.803-25.252-13.385-15.674   c9.582-9.578-5.603-23.454-15.676-13.384c-6.678,6.68-4.805,21.079-3.442,27.906l-3.439,3.44   c-48.37,20.299-64.252,44.289-56.816,56.846l-14.027,17.998c-0.129,0.167-0.117,0.406,0.035,0.561   c0.152,0.154,0.394,0.165,0.564,0.033l17.996-14.022c12.551,7.433,36.543-8.446,56.844-56.819L168.587,36.007z"></path>
      </g>
    </svg>
  );
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
const AdmonitionConfigs = {
  note: {
    infimaClassName: 'secondary',
    iconComponent: NoteIcon,
    label: (
      <Translate
        id="theme.admonition.note"
        description="The default label used for the Note admonition (:::note)">
        note
      </Translate>
    ),
  },
  tip: {
    infimaClassName: 'success',
    iconComponent: TipIcon,
    label: (
      <Translate
        id="theme.admonition.tip"
        description="The default label used for the Tip admonition (:::tip)">
        tip
      </Translate>
    ),
  },
  danger: {
    infimaClassName: 'danger',
    iconComponent: DangerIcon,
    label: (
      <Translate
        id="theme.admonition.danger"
        description="The default label used for the Danger admonition (:::danger)">
        danger
      </Translate>
    ),
  },
  info: {
    infimaClassName: 'info',
    iconComponent: InfoIcon,
    label: (
      <Translate
        id="theme.admonition.info"
        description="The default label used for the Info admonition (:::info)">
        info
      </Translate>
    ),
  },
  caution: {
    infimaClassName: 'warning',
    iconComponent: CautionIcon,
    label: (
      <Translate
        id="theme.admonition.caution"
        description="The default label used for the Caution admonition (:::caution)">
        caution
      </Translate>
    ),
  },

  purple: {
    infimaClassName: 'purple',
    iconComponent: PurpleIcon,
    label: (
      <Translate
        id="theme.admonition.purple"
        description="The default label used for the purple admonition (:::purple)">
        purple
      </Translate>
    ),
  },
  paper: {
    infimaClassName: 'paper',
    iconComponent: PaperIcon,
    label: (
      <Translate
        id="theme.admonition.paper"
        description="The default label used for the paper admonition (:::paper)">
        paper
      </Translate>
    ),
  },
  pink: {
    infimaClassName: 'pink',
    iconComponent: PinkIcon,
    label: (
      <Translate
        id="theme.admonition.pink"
        description="The default label used for the pink admonition (:::pink)">
        pink
      </Translate>
    ),
  },
  colorful: {
    infimaClassName: 'colorful',
    iconComponent: ColorfulIcon,
    label: (
      <Translate
        id="theme.admonition.colorful"
        description="The default label used for the pink admonition (:::colorful)">
        colorful
      </Translate>
    ),
  },

};
// Legacy aliases, undocumented but kept for retro-compatibility
const aliases = {
  secondary: 'note',
  important: 'info',
  success: 'tip',
  warning: 'danger'
};
function getAdmonitionConfig(unsafeType) {
  const type = aliases[unsafeType] ?? unsafeType;
  const config = AdmonitionConfigs[type];
  if (config) {
    return config;
  }
  console.warn(
    `No admonition config found for admonition type "${type}". Using Info as fallback.`,
  );
  return AdmonitionConfigs.info;
}
// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
  const items = React.Children.toArray(children);
  const mdxAdmonitionTitle = items.find(
    (item) =>
      React.isValidElement(item) &&
      item.props?.mdxType === 'mdxAdmonitionTitle',
  );
  const rest = <>{items.filter((item) => item !== mdxAdmonitionTitle)}</>;
  return {
    mdxAdmonitionTitle,
    rest,
  };
}
function processAdmonitionProps(props) {
  const {mdxAdmonitionTitle, rest} = extractMDXAdmonitionTitle(props.children);
  return {
    ...props,
    title: props.title ?? mdxAdmonitionTitle,
    children: rest,
  };
}
export default function Admonition(props) {
  const {children, type, title, icon: iconProp} = processAdmonitionProps(props);
  const typeConfig = getAdmonitionConfig(type);
  const titleLabel = title ?? typeConfig.label;
  const {iconComponent: IconComponent} = typeConfig;
  const icon = iconProp ?? <IconComponent />;
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(props.type),
        'alert',
        `alert--${typeConfig.infimaClassName}`,
        styles.admonition,
      )}>
      <div className={styles.admonitionHeading}>
        <span className={styles.admonitionIcon}>{icon}</span>
        {titleLabel}
      </div>
      <div className={styles.admonitionContent}>{children}</div>
    </div>
  );
}
