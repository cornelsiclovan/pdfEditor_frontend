import React from 'react';
import Button from '../../FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_TYPE_EMAIL
} from '../../util/validators';

import { useForm } from '../../hooks/form-hook';
import { useHttpClient } from '../../hooks/http-hook';

const NewClient = () => {
    const { isLoading, error, sendRequest, clearError } = useHttplClient();
    const [formState, inputHandler] = useForm(
        {
            subsemnatul: {
                value: '',
                isValid: false
            },
            domiciliat: {
                value: '',
                isValid: false,
            },
            strada: {
                value: '',
                isValid: false,
            },
            numar: {
                value: '',
                isValid: false
            },
            bloc: {
                value: '',
                isValid: false
            },
            scara: {
                value: '',
                isValid: false
            },
            etaj: {
                value: '',
                isValid: false
            },
            apartament: {
                value: '',
                isValid: false
            },
            judet: {
                value: '',
                isValid: false
            },
            telefon: {
                value: '',
                isValid: false
            },
            act_ident: {
                value: '',
                isValid: false
            },
            act_ident_seria: {
                value: '',
                isValid: false
            }, 
            act_ident_numar: {
                value: '',
                isValid: false
            },
            cnp_nif: {
                value: '',
                isValid: false
            },
            eliberat: {
                value: '',
                isValid: false
            },
            eliberat_data: {
                value: '',
                isValid: false
            },
            calitate: {
                value: '',
                isValid: false
            },
            firma: {
                value: '',
                isValid: false
            },
            nr_ordine_rc: {
                value: '',
                isValid: false
            },
            cui: {
                value: '',
                isValid: false
            },
            sediu_domiciliat: {
                value: '',
                isValid: false
            },
            sediu_strada: {
                value: '',
                isValid: false
            },
            sediu_numar: {
                value: '',
                isValid: false
            }, 
            sediu_bloc: {
                value: '',
                isValid: false
            },
            sediu_scara: {
                value: '',
                isValid: false
            }, 
            sediu_etaj: {
                value: '',
                isValid: false
            },
            sediu_apartament: {
                value: '',
                isValid: false
            },
            sediu_judet: {
                value: '',
                isValid: false
            },
            sediu_cod: {
                value: '',
                isValid: false
            },
            sediu_cod_post: {   
                value: '',
                isValid: false
            },
            sediu_telefon: {
                value: '',
                isValid: false
            },
            sediu_telefon1: {
                value: '',
                isValid: false
            },
            sediu_fax: {
                value: '',
                isValid: false
            },
            sediu_fax1: {
                value: '',
                isValid: false
            },
            sediu_mail: {
                value: '',
                isValid: false
            },
            sediu_web: {
                value: '',
                isValid: false
            },
            declar_0: {
                value: '',
                isValid: false
            },
            declar_1: {
                value: '',
                isValid: false
            },
            declar_2: {
                value: '',
                isValid: false
            },
            declar_3: {
                value: '',
                isValid: false
            }, 
            data: {
                value: '',
                isValid: false
            }
        }
    )

    const clientSubmitHandler = async event => {
        event.preventDefaultHandler();

        try {
            const formData = new FormData();
            formData.append('subsemnatul', formState.inputs.subsemnatul.value);
            formData.append('domicliat', formState.inputs.domiciliat.value);
            formData.append('strada', formState.inputs.strada.value);
            formData.append('numar', formState.inputs.numar.value);
            formData.append('bloc', formState.inputs.bloc.value);
            formData.append('scara', formState.inputs.scara.value);
            formData.append('etaj', formState.inputs.etaj.value);
            formData.append('apartament', formState.inputs.apartament.value);

            formData.append('judet', formState.inputs.judet.value);
            formData.append('telefon', formState.inputs.telefon.value);
            formData.append('act_ident', formState.inputs.act_ident.value);
            formData.append('act_ident_seria', formState.inputs.act_ident_numar.value);
            formData.append('cnp_nif', formState.inputs.cnp_nif.value);
            formData.append('eliberat', formState.inputs.eliberat.value);
            formData.append('eliberat_data', formState.inputs.eliberat_data.value);
            formData.append('calitate', formState.inputs.calitate.value);

            formData.append('firma', formState.inputs.firma.value);
            formData.append('nr_ordine_rc', formState.inputs.nr_ordine_rc.value);
            formData.append('cui', formState.inputs.cui.value);
            formData.append('sediu_domiciliat', formState.inputs.sediu_domiciliat.value);
            formData.append('sediu_strada', formState.inputs.sediu_strada.value);
            formData.append('sediu_numar', formState.inputs.sediu_numar.value);
            formData.append('sediu_bloc', formState.inputs.sediu_bloc.value);
            formData.append('sediu_scara', formState.inputs.sediu_scara.value);

            formData.append('sediu_etaj', formState.inputs.sediu_etaj.value);
            formData.append('sediu_apartament', formState.inputs.sediu_apartament.value);
            formData.append('sediu_judet', formState.inputs.sediu_judet.value);
            formData.append('sediu_cod', formState.inputs.sediu_cod.value);
            formData.append('sediu_cod_post', formState.inputs.sediu_cod_post.value);
            formData.append('sediu_telefon', formState.inputs.sediu_telefon.value);
            formData.append('sediu_telefon1', formState.inputs.sediu_telefon1.value);
            formData.append('sediu_fax', formState.inputs.sediu_fax.value);

            formData.append('sediu_fax1', formState.inputs.sediu_fax1.value);
            formData.append('sediu_mail', formState.inputs.sediu_mail.value);
            formData.append('sediu_web', formState.inputs.sediu_web.value);
            formData.append('declar_0', formState.inputs.declar_0.value);
            formData.append('declar_1', formState.inputs.declar_1.value);
            formData.append('declar_2', formState.inputs.declar_2.value);
            formData.append('declar_3', formState.inputs.declar_3.value);
            formData.append('data', formState.inputs.data.value);

        }
    }

    return (
        <div>New client form</div>
    );
};

export default NewClient;