<?php

namespace App\Form;

use App\Entity\Comment;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\EmailType;

class CommentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
//            ->add('pseudo')
//            ->add('email', EmailType::class)
            ->add('commentContent', TextareaType::class, [
                'label' => false,
                'attr' => [
                    'placeholder' => 'Votre commentaire',
                    ],
            ])
            ->add('envoyer', SubmitType::class)
//            ->add('createdAt', DateType::class, [
//                'attr' => [
//                    'class' => 'visibility'
//                ],
//                'label' => false
//            ]);
//            ->add('idArticle')
//            ->add('idUser')
//            ->add('parent')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Comment::class,
        ]);
    }
}
