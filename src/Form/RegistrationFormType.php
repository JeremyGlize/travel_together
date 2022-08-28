<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\IsTrue;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstName', TextType::class, [
                'attr' => [
                    'class' => 'signin-form'
                ],
                'required' => false,
                'trim' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner un prénom !',
                    ]),
                    new Length([
                        'min' => 3,
                        'minMessage' => 'Le prénom doit contenir au moins {{ limit }} lettres'
                    ])
                ],
                'label' => 'Prénom'
            ])

            ->add('lastName', TextType::class, [
                'attr' => [
                    'class' => 'signin-form'
                ],
                'required' => false,
                'trim' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner un nom !',
                    ]),
                    new Length([
                        'min' => 3,
                        'minMessage' => 'Le nom doit contenir au moins {{ limit }} lettres'
                    ])
                ],
                'label' => 'Nom'
            ])

            ->add('pseudo', TextType::class,[
                'attr' => [
                    'class' => 'signin-form'
                ],
                'required' => false,
                'trim' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner un pseudo !',
                    ]),
                    new Length([
                        'min' => 3,
                        'minMessage' => 'Le pseudo doit contenir au moins {{ limit }} lettres'
                    ]),
                ],
                'label' => 'Pseudo'
            ])

            ->add('email', EmailType::class, [
                'attr' => [
                    'class' => 'signin-form'
                ],
                'label' => 'Email',
                'required' => false,
                'trim' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner une adresse email !',
                    ]),
                ]
            ])

            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options' => ['label' => 'Saisissez votre mot de passe'],
                'second_options' => ['label' => 'Confirmez votre mot de passe'],
                'invalid_message' => 'Veuillez réessayer !',
                'required' => false,
                'mapped' => false,
                'trim' => true,
                'attr' => [
                    'autocomplete' => 'new-password',
                    'class' => 'signin-form',
                    ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner un mot de passe',
                    ]),
                    new Length([
                        'min' => 8,
                        'minMessage' => 'Votre mot de passe doit contenir au moins {{ limit }} caractères',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])

            ->add('roles', ChoiceType::class, [
                'choices' => [
                    'Utilisateur' => 'ROLE_USER',
                    'Éditeur' => 'ROLE_EDITOR',
                ],
                'expanded' => true,
                'multiple' => true,
                'label' => 'Rôles <i class="fa-solid fa-circle-info"></i>',
                'label_html' => true,
            ])

            ->add('agreeTerms', CheckboxType::class, [
                'label' => false,
                'mapped' => false,
                'required' => true,
                'constraints' => [
                    new IsTrue([
                        'message' => 'Veuillez accepter les termes !',
                    ]),
                ],
                'attr' => [
                    'class' => 'checkbox-visible'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
