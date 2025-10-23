type StyleType = 'passing' | 'optional' | 'blocking';

type BadgeStyle = {
  backgroundColor: string;
  color: string;
  icon: string;
  title: string;
};

type Styles = {
  [key in StyleType]: BadgeStyle;
};