import PropTypes from 'prop-types';
import { Input, Label } from './FiltrStyled';

export const Filter = ({ value, onChange }) => {
    return (
        <Label>
            Find contacts by name
            <Input name='filter' value={value} onChange={onChange} />
        </Label>
    );
};

Filter.PropTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};