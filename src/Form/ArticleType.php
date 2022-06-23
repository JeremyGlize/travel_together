<?php

namespace App\Form;

use Leapt\FroalaEditorBundle\Form\Type\FroalaEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;


class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // la méthode add accepte 3 paramètres :
        // le premier est le nom de la propriété de l'entité
        // le second est le type de champ voulu
        // le troisième est un tableau d'options à passer au formulaire.
        $builder
            ->add('title', TextType::class, [
                'attr' => ['class' => 'title-article-form',
                    'autocomplete' => 'off'],
                'label' => 'Titre'
            ])
            ->add('content', FroalaEditorType::class, [
                'label' => ' '
            ])
            ->add('user', HiddenType::class)
            ->add('save', SubmitType::class, [
                'label' => 'Enregistrer'
            ])
            ->add('createdAt', DateType::class, [
            'attr' => [
                'class' => 'visibility'
            ],
            'label' => false
        ]);
    }
}