import React, { useRef, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { Container, Input, ErrorMessage } from '../../components/GlobalStyles';
import {
  Title,
  TermsAndConditions,
  TermsAndConditionsText,
  TermsAndConditionsLink,
  TermsAndConditionsLinkText,
  GoBack,
  GoBackText,
} from './styles';

import Button from '../../components/Button';

function SignUp() {
  const navigation = useNavigation();

  const signUpSchema = yup.object({
    name: yup.string().required('Nome é um campo obrigatório'),
    email: yup.string().required('E-mail é um campo obrigatório'),
    birth_date: yup.string().required('Aniversário é um campo obrigatório'),
    cpf: yup
      .string()
      .min(11, 'O CPF deve ter pelo menos 11 números')
      .required('CPF é um campo obrigatório'),
    gender: yup.string().required('Gênero é um campo obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Senha é um campo obrigatório'),
    confirm_password: yup
      .string()
      .min(6, 'A confirmação de senha deve ter pelo menos 6 caracteres')
      .required('Confirmação de senha é um campo obrigatório'),
  });

  const emailRef = useRef();
  const birthDateRef = useRef();
  const cpfRef = useRef();
  const genderRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    if (passwordRef) {
      passwordRef.current.setNativeProps({
        style: { fontFamily: 'roboto-regular' },
      });
      confirmPasswordRef.current.setNativeProps({
        style: { fontFamily: 'roboto-regular' },
      });
    }
  }, []);

  const handleSignUp = (values, actions) => {
    alert(JSON.stringify(values));

    actions.setSubmitting(false);
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    values,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      birth_date: '',
      cpf: '',
      gender: '',
      password: '',
      confirm_password: '',
    },
    onSubmit: handleSignUp,
    validationSchema: signUpSchema,
  });

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Olá, precisamos de suas informações para criar sua conta.</Title>
        <Input
          placeholder="NOME"
          onChangeText={handleChange('name')}
          value={values.name}
          onBlur={handleBlur('name')}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          blurOnSubmit={false}
        />
        {touched.name && errors.name && (
          <ErrorMessage>{errors.name}</ErrorMessage>
        )}

        <Input
          placeholder="E-MAIL"
          onChangeText={handleChange('email')}
          value={values.email}
          onBlur={handleBlur('email')}
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => birthDateRef.current.focus()}
          blurOnSubmit={false}
        />
        {touched.email && errors.email && (
          <ErrorMessage>{errors.email}</ErrorMessage>
        )}

        <Input
          placeholder="DATA DE NASCIMENTO"
          onChangeText={handleChange('birth_date')}
          value={values.birth_date}
          onBlur={handleBlur('birth_date')}
          ref={birthDateRef}
          returnKeyType="next"
          onSubmitEditing={() => cpfRef.current.focus()}
          blurOnSubmit={false}
        />
        {touched.birth_date && errors.birth_date && (
          <ErrorMessage>{errors.birth_date}</ErrorMessage>
        )}

        <Input
          placeholder="CPF"
          onChangeText={handleChange('cpf')}
          value={values.cpf}
          onBlur={handleBlur('cpf')}
          ref={cpfRef}
          returnKeyType="next"
          onSubmitEditing={() => genderRef.current.focus()}
          blurOnSubmit={false}
        />
        {touched.cpf && errors.cpf && <ErrorMessage>{errors.cpf}</ErrorMessage>}

        <Input
          placeholder="GÊNERO"
          onChangeText={handleChange('gender')}
          value={values.gender}
          onBlur={handleBlur('gender')}
          ref={genderRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          blurOnSubmit={false}
        />
        {touched.gender && errors.gender && (
          <ErrorMessage>{errors.gender}</ErrorMessage>
        )}

        <Input
          placeholder="SENHA"
          secureTextEntry
          onChangeText={handleChange('password')}
          value={values.password}
          onBlur={handleBlur('password')}
          ref={passwordRef}
          returnKeyType="next"
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          blurOnSubmit={false}
        />
        {touched.password && errors.password && (
          <ErrorMessage>{errors.password}</ErrorMessage>
        )}

        <Input
          placeholder="CONFIRMAR SENHA"
          secureTextEntry
          onChangeText={handleChange('confirm_password')}
          value={values.confirm_password}
          onBlur={handleBlur('confirm_password')}
          ref={confirmPasswordRef}
        />
        {touched.confirm_password && errors.confirm_password && (
          <ErrorMessage>{errors.confirm_password}</ErrorMessage>
        )}

        <TermsAndConditions>
          <TermsAndConditionsText>
            Declaro que aceito os termos de uso.
          </TermsAndConditionsText>
          <TermsAndConditionsLink>
            <TermsAndConditionsLinkText>Ver termos</TermsAndConditionsLinkText>
          </TermsAndConditionsLink>
        </TermsAndConditions>

        <Button onPress={handleSubmit} loading={isSubmitting}>
          Criar uma conta agora
        </Button>

        <GoBack onPress={() => navigation.goBack()}>
          <GoBackText>Voltar</GoBackText>
        </GoBack>
      </ScrollView>
    </Container>
  );
}

export default SignUp;