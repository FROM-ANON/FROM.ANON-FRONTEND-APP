import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Typo = () => {
  return <></>;
};

const styles = StyleSheet.create({
  big: {
    fontFamily: 'PretendardMedium',
    fontSize: 35,
    lineHeight: 53,
  },
  heading1: {
    fontFamily: 'PretendardBold',
    fontSize: 28,
    lineHeight: 42,
  },
  heading2: {
    fontFamily: 'PretendardMedium',
    fontSize: 28,
    lineHeight: 42,
  },
  heading3: {
    fontFamily: 'PretendardMedium',
    fontSize: 24,
    lineHeight: 36,
  },
  body1: {
    fontFamily: 'PretendardBold',
    fontSize: 18,
    lineHeight: 27,
  },
  body2: {
    fontFamily: 'PretendardBold',
    fontSize: 16,
    lineHeight: 24,
  },
  body3: {
    fontFamily: 'PretendardBold',
    fontSize: 14,
    lineHeight: 21,
  },
  body4: {
    fontFamily: 'PretendardMedium',
    fontSize: 14,
    lineHeight: 21,
  },
  small1: {
    fontFamily: 'PretendardBold',
    fontSize: 12,
    lineHeight: 18,
  },
  small2: {
    fontFamily: 'PretendardMedium',
    fontSize: 12,
    lineHeight: 18,
  },
  small3: {
    fontFamily: 'PretendardBold',
    fontSize: 10,
    lineHeight: 15,
  },
  small4: {
    fontFamily: 'PretendardMedium',
    fontSize: 10,
    lineHeight: 15,
  },
});

Typo.big = ({ color, children }) => (
  <Text style={[styles.big, { color }]}>{children}</Text>
);
Typo.h1 = ({ color, children }) => (
  <Text style={[styles.heading1, { color }]}>{children}</Text>
);
Typo.h2 = ({ color, children }) => (
  <Text style={[styles.heading2, { color }]}>{children}</Text>
);
Typo.h3 = ({ color, children }) => (
  <Text style={[styles.heading3, { color }]}>{children}</Text>
);
Typo.b1 = ({ color, children }) => (
  <Text style={[styles.body1, { color }]}>{children}</Text>
);
Typo.b2 = ({ color, children }) => (
  <Text style={[styles.body2, { color }]}>{children}</Text>
);
Typo.b3 = ({ color, children }) => (
  <Text style={[styles.body3, { color }]}>{children}</Text>
);
Typo.b4 = ({ color, children }) => (
  <Text style={[styles.body4, { color }]}>{children}</Text>
);
Typo.s1 = ({ color, children }) => (
  <Text style={[styles.small1, { color }]}>{children}</Text>
);
Typo.s2 = ({ color, children }) => (
  <Text style={[styles.small2, { color }]}>{children}</Text>
);
Typo.s3 = ({ color, children }) => (
  <Text style={[styles.small3, { color }]}>{children}</Text>
);
Typo.s4 = ({ color, opacity, children }) => (
  <Text style={[styles.small4, { color, opacity }]}>{children}</Text>
);

export default Typo;
