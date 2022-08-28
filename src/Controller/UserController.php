<?php

namespace App\Controller;

use App\Form\UserDashType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/users/{id}/edit', name: 'user_edit')]
    public function userDash($id, UserRepository $userRepository, Request $request, EntityManagerInterface $entityManager): \Symfony\Component\HttpFoundation\RedirectResponse|Response
    {
        $user = $userRepository->findOneBy(['id' => $id]);
        if (!$user) {
            return $this->redirectToRoute('app_login');
        }
        $form = $this->createForm(UserDashType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('message', 'Votre profil a bien été modifié');
            return $this->redirectToRoute('user_edit', ['id' => $id]);
        }

        return $this->render('user/userDash.html.twig', [
            'user' => $user,
            'form' => $form->createView()
        ]);
    }
}
