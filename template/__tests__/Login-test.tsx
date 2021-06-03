/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';

import {render, RenderAPI, RenderOptions} from '@testing-library/react-native';
import {Login} from 'screens/Login/index';
import {ThemeProvider} from '../src/ui/theme';

const customRender = (
  ui: React.ReactElement<any>,
  options?: RenderOptions | undefined,
): RenderAPI => render(ui, {wrapper: ThemeProvider, ...options});

it('renders correctly', () => {
  const {queryByTestId} = customRender(<Login />);
  const title = queryByTestId('title');
  expect(title).toHaveTextContent('Sign In');
});
