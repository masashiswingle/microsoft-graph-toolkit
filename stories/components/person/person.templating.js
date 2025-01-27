/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { html } from 'lit-element';
import { withCodeEditor } from '../../../.storybook/addons/codeEditorAddon/codeAddon';
import { versionInfo } from '../../versionInfo';

export default {
  parameters: {
    version: versionInfo
  },
  title: 'Components / mgt-person / Templating',
  component: 'mgt-person',
  decorators: [withCodeEditor]
};

export const DefaultTemplates = () => html`
  <mgt-person person-query="me">
    <template>
      <div>
        Hello, my name is: {{person.displayName}}
      </div>
    </template>
    <template data-type="loading">
      Loading
    </template>
  </mgt-person>
`;

export const noDataTemplate = () => html`
  <div>
    <div>No data template</div>
    <mgt-person>
      <template data-type="no-data">
        <div>No person</div>
      </template>
    </mgt-person>
  </div>
  `;

export const retemplateMetadata = () => html`
  <mgt-person person-query="me" view="threeLines">
    <template data-type="line1">
      <div>
        Hello, my name is: {{person.displayName}}
      </div>
    </template>
    <template data-type="line2">
      <div>
        {{person.jobTitle}}
      </div>
    </template>
    <template data-type="line3">
      <div>
        Loves MGT
      </div>
    </template>
  </mgt-person>
`;

export const personCard = () => html`
    <mgt-person person-query="me" view="twolines" person-card="hover">
      <template data-type="person-card">
        <!-- <mgt-person-card inherit-details></mgt-person-card> -->
        My custom person card experience
      </template>
    </mgt-person>
`;
