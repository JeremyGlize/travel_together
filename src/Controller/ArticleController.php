<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Form\CommentType;
use App\Entity\Article;
use App\Form\ArticleType;
use App\Repository\ArticleRepository;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/articles', name: 'article_')]
class ArticleController extends AbstractController
{
    #[Route('/', name: 'listing')]
    public function articles(ArticleRepository $articleRepository, CommentRepository $commentRepository): \Symfony\Component\HttpFoundation\Response
    {
        $articles = $articleRepository->findAll();
        $comments = $commentRepository->findBy([
            'article' => $articles,
            'actif' => 1
        ],
            ['createdAt' => 'desc']);

        return $this->render('article/articles.html.twig', compact('articles', 'comments'));
    }

    #[Route('/new', name: 'new')]
    public function articleNew(Request $request, EntityManagerInterface $entityManager): \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
    {
        $newArticle = new Article();
        $form = $this->createForm(ArticleType::class, $newArticle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user = $this->getUser();
            $articleToSave = $form
                ->getData()
                ->setUser($user)
                ->setCreatedAt(new \DateTime());
            $entityManager->persist($articleToSave);
            $entityManager->flush();
            $this->addFlash('success', 'Votre article à été créé avec succès ! ');
            return $this->redirectToRoute('article_listing');
        }

        return $this->render('article/articleNew.html.twig', [
            'articleForm' => $form->createView()
        ]);
    }

    #[Route('/{id}', name: 'detail')]
    public function articleDetail ($id, ArticleRepository $articleRepository, Request $request, EntityManagerInterface $entityManager): \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
    {
        $article = $articleRepository->findOneBy([
            'id' => $id ]);
        if (!$article) {
            $this->addFlash('warning', 'Aucun article trouvé.');
            return $this->redirectToRoute('article_listing');
        }

        $newComment = new Comment();
        $newComment->setCreatedAt(new \DateTime());
        $form = $this->createForm(CommentType::class,$newComment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user = $this->getUser();
            $newComment = $form
                ->getData();
            $newComment
                ->setUser($user)
                ->setPseudo($user->getPseudo())
                ->setArticle($article)
                ->setCreatedAt(new \DateTime());
            $entityManager->persist($newComment);
            $entityManager->flush();
            $this->addFlash('success', 'Votre commentaire à été ajouté avec succès ! ');
            return $this->redirectToRoute('article_listing');
        }

        return $this->render('article/articleDetail.html.twig', [
            'form' => $form->createView(),
            'article' => $article,
            'comment' => $newComment,
        ]);
    }
}
