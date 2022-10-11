/* REACT */
import React from 'react';

/* ICONS */
import { FiSettings } from 'react-icons/fi';

/* MUI */
import Box from '@mui/material/Box';
import Drawer from '../../core/Drawer';

/* TYPES */
import { LoanCalculatorProps } from './LoanCalculator.types';

/* LOCAL */
import LoanCalculatorUi from './LoanCalculatorUi';
import AppConfig, { IFormInput } from './AppConfig';

const LoanCalculator: React.FC<LoanCalculatorProps> = ({
  config = {
    theme_color: '#f9aa00',
    calculate_button: {
      title: 'Calculate Now',
      colors: {
        background: '#f9aa00',
        font: '#ffffff',
      },
      bold: true,
    },
    primary_button: {
      title: 'Get Pre-qualified',
      colors: {
        background: '#06a568',
        font: '#ffffff',
      },
      bold: true,
    },
    secondary_button: {
      title: 'Apply Now',
      colors: {
        background: '#eafff7',
        font: '#06a568',
      },
      href: 'https://business.taygo.tech/',
      linkTarget: 'popup',
      bold: true,
    },
    rates_note:
      'Note: Estimated monthly payment based on a fixed APR loan for the mortgage amount plus taxes, maintenance (when applicable and does not incluse insurance or other applicable fees. Information Provided as a guide only',
    disclaimer_note: 'Ipsum pretium elementum purus vitae diam at. nec nunc turpis in et tellus vitae id et.',
    redirect_note: undefined,
    down_payments: undefined,
    interest_rates: undefined,
    loan_terms: undefined,
    app_border_color: '#e2e2e2',
    app_border: true,
    header: true,
    header_title: undefined,
    header_description: undefined,
  },
}) => {
  const [configIsopen, setConfigIsOpen] = React.useState<boolean>(true);
  const [formData, setFormData] = React.useState<IFormInput | undefined>(undefined);

  React.useEffect(() => {
    console.log('formData', formData);
    // api call to save the data
  }, [formData]);

  return (
    <Box display="flex" width="100%">
      <Box display="flex" width={configIsopen ? 'calc(100% - 340px)' : '100%'}>
        <LoanCalculatorUi data={formData || config} />
      </Box>

      <Drawer
        drawerWidth={340}
        open={configIsopen}
        headerProps={{
          title: 'App Configuration',
          icon: <FiSettings />,
        }}
        hideBackdrop
        onClose={() => setConfigIsOpen(false)}
        variant="persistent"
        anchor="right"
      >
        <AppConfig onChange={(data) => setFormData(data)} initialValues={config as IFormInput} />
      </Drawer>
    </Box>
  );
};

export default LoanCalculator;
