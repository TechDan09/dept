import { render, screen } from '@testing-library/react';
import ClientCard from './ClientCard';

describe('ClientCard', () => {
  it('mounts component correctly', () => {
    render(<ClientCard brandDescription="test-desc" brandName="test-name" brandImage="test-img" />);

    expect(screen.getByText('test-name')).toBeInTheDocument();
    expect(screen.getByText('test-desc')).toBeInTheDocument();
  });
});
