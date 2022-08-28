<?php

namespace App\Controller;

use App\Form\UserType;
use App\Repository\CommentRepository;
use App\Repository\ArticleRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class AdminController extends AbstractController
{
    #[Route('admin/dashboard', name: 'dashboard')]
    public function userListing(UserRepository $userRepository, ArticleRepository $articleRepository, CommentRepository $commentRepository): Response
    {
        $users = $userRepository->findAll();
        $articles = $articleRepository->findAll();
        $comments = $commentRepository->findAll();
        return $this->render('admin/dashboard.html.twig', [
            'users' => $users,
            'articles' => $articles,
            'comments' => $comments,
            'controller_name' => 'AdminController',
        ]);
    }

    #[Route('/users/{id}/edit', name: 'user_edit')]
    public function userEdit($id, UserRepository $userRepository, Request $request, EntityManagerInterface $entityManager): \Symfony\Component\HttpFoundation\RedirectResponse|Response
    {
        $user = $userRepository->findOneBy(['id' => $id]);
        if (!$user) {
            return $this->redirectToRoute('dashboard');
        }
        $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('message', 'Utilisateur modifié avec succès');
            return $this->redirectToRoute('dashboard');
        }

        return $this->render('admin/userEdit.html.twig', [
            'user' => $user,
            'form' => $form->createView()
        ]);
    }

    #[Route('/users/{id}/delete', name: 'user_delete')]
    public function userDelete(UserRepository $userRepository, EntityManagerInterface $entityManager, $id): \Symfony\Component\HttpFoundation\RedirectResponse
    {
        $user = $userRepository->findOneBy(['id' => $id]);
        if (!$user) {
            return $this->redirectToRoute('dashboard');
        }
        $entityManager->remove($user);
        $entityManager->flush();
        return $this->redirectToRoute('dashboard');
    }

    #[Route('/articles/{id}/delete', name: 'article_delete')]
    public function articleDelete(ArticleRepository $articleRepository, EntityManagerInterface $entityManager, $id): \Symfony\Component\HttpFoundation\RedirectResponse
    {
        $article = $articleRepository->findOneBy(['id' => $id]);
        if (!$article) {
            return $this->redirectToRoute('dashboard');
        }
        $entityManager->remove($article);
        $entityManager->flush();
        return $this->redirectToRoute('dashboard');
    }

    #[Route('/comments/{id}/delete', name: 'comment_delete')]
    public function commentDelete(CommentRepository $commentRepository, EntityManagerInterface $entityManager, $id): \Symfony\Component\HttpFoundation\RedirectResponse
    {
        $comment = $commentRepository->findOneBy(['id' => $id]);
        if (!$comment) {
            return $this->redirectToRoute('dashboard');
        }
        $entityManager->remove($comment);
        $entityManager->flush();
        return $this->redirectToRoute('dashboard');
    }
}
