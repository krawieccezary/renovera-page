import React from 'react';
import Spinner from 'react-spinkit';
import { theme } from '../../../assets/styles/theme';

const LoadingSpinner = () => <Spinner name="three-bounce" color={theme.color.primary}/>;

export default LoadingSpinner;